const UpdateStore = (state, payload) => {
    return {
        ...state,
        profileInformation: {
            ...state.profileInformation,
            ...payload
        }
    };
}

export default UpdateStore;