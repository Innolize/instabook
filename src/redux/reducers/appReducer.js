const initialState = {
    publicaciones: [
        { user: "usuario1 test1", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/44TJkkxzxHU" },
        { user: "usuario2 test2", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/44TJkkxzxHU" },
        { user: "usuario3 test3", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/44TJkkxzxHU" },
        { user: "usuario4 test4", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/44TJkkxzxHU" },
        { user: "usuario5 test5", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/44TJkkxzxHU" }
    ],
    users: ["carlitos1 carlitos1", "carlitos2 carlitos2", "carlitos3 carlitos3", "carlitos4 carlitos4"]
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "AGREGAR_PUBLICACION":
            return {
                ...state, publicaciones: [...state.publicaciones, payload]
            }


        default:
            return state
    }
}

export default appReducer