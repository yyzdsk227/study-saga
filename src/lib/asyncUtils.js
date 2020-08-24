export const createPromiseThunk = (type, promiseCreator) => {
  const [success, error] = [`${type}_success`, `${type}_error`];

  return (param) => async (dispatch) => {
    //return promiseCreator
    dispatch({ type });
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: success,
        payload,
      });
    } catch (e) {
      dispatch({
        type: error,
        payload: e,
        error: true,
      });
    }
  };
};

const defaultSelector = (param) => param;

export const createPromiseThunkId = (
  type,
  promiseCreator,
  idSelector = defaultSelector
) => {
  const [success, error] = [`${type}_success`, `${type}_error`];

  return (param) => async (dispatch) => {
    //return promiseCreator
    const id = idSelector(param);
    dispatch({ type, meta: id });
    const payload = await promiseCreator(param);

    try {
      dispatch({
        type: success,
        payload,
        meta: id,
      });
    } catch (e) {
      dispatch({
        type: error,
        payload: e,
        error: true,
        meta: id,
      });
    }
  };
};

//handleAsyncActions
export const handleAsyncActions = (type, key, keepData) => {
  const [success, error] = [`${type}_success`, `${type}_error`];

  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loadding(keepData ? state[key].data : null),
        };
      case success:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload),
        };
      case error:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload),
        };
      default:
        return state;
    }
  };
};

export const handleAsyncActionsId = (type, key, keepData) => {
  const [success, error] = [`${type}_success`, `${type}_error`];

  return (state, action) => {
    const id = action.meta;
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: {
            ...state.key,
            [id]: reducerUtils.loadding(
              keepData ? state[key][id] && state[key][id].data : null
            ),
          },
        };
      case success:
        return {
          ...state,
          [key]: {
            ...state.key,
            [id]: reducerUtils.success(action.payload),
          },
        };
      //
      case error:
        return {
          ...state,
          [key]: {
            ...state.key,
            [id]: reducerUtils.error(action.payload),
          },
        };
      default:
        return state;
    }
  };
};

export const reducerUtils = {
  initial: (data = null) => ({
    //parsing error ===
    loadding: false,
    data,
    error: null,
  }),
  loadding: (prevState = null) => ({
    loadding: true,
    data: prevState,
    error: null,
  }),
  success: (data) => ({
    loadding: false,
    data,
    error: null,
  }),
  error: (error) => ({
    loadding: false,
    data: null,
    error,
  }),
};
