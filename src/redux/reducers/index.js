const initialState = {
    publicaciones: [
        { user: "usuario1 test1", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/v=44TJkkxzxHU" },
        { user: "usuario2 test2", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/v=44TJkkxzxHU" },
        { user: "usuario3 test3", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/v=44TJkkxzxHU" },
        { user: "usuario4 test4", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/v=44TJkkxzxHU" },
        { user: "usuario5 test5", comment: "test1 test1 test1 test1 test1 test1 test1", youtube: "https://www.youtube.com/embed/v=44TJkkxzxHU" }
    ]
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "ALGO":
            return { ...state, ...payload }

        default:
            return state
    }
}

export default reducer