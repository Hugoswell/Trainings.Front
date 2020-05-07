const UpdateStore = (state, payload) => {
    return {
        ...state,
        userInformation: {
            ...state.userInformation,
            ...payload
        }
    };
}

export default UpdateStore;