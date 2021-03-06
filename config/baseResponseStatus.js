module.exports = {
    // 2XX : Success
    SUCCESS: { isSuccess: true, code: 200, message: "Successed" },

    // 3xx : form validation error
    EMPTY_ID: { isSuccess: true, code: 300, message: "ID is required." },
    EMPTY_PASSWORD: { isSuccess: true, code: 301, message: "Password is required." },
    EMPTY_NAME: { isSuccess: true, code: 302, message: "User name is required." },
    EMPTY_NICKNAME: { isSuccess: true, code: 303, message: "User nickname is required." },
    EMPTY_ADDRESSIDX: { isSuccess: true, code: 304, message: "AddressIdx is required." },
    EMPTY_ADDRESSTYPE: { isSuccess: true, code: 305, message: "Address type is required." },
    EMPTY_INFO_TO_UPDATE: { isSuccess: true, code: 306, message: "There is no info to update." },
    EMPTY_TITLE: { isSuccess: true, code: 307, message: "Title is required." },
    EMPTY_CATEGORYIDX: { isSuccess: true, code: 308, message: "CategoryIdx is required." },
    EMPTY_CONTENT: { isSuccess: true, code: 309, message: "Content is required." },
    EMPTY_SEARCH_RANGE: { isSuccess: true, code: 310, message: "Range is required." },

    LENGTH_ID: { isSuccess: true, code: 307, message: "User ID should be shorter then 20 charaters." },
    LENGTH_PASSWORD: { isSuccess: true, code: 308, message: "User password should be longer than 6 and shorter then 20 charaters." },
    LENGTH_NAME: { isSuccess: true, code: 309, message: "User name should be shorter then 24 charaters." },
    LENGTH_NICKNAME: { isSuccess: true, code: 310, message: "User name should be shorter then 24 charaters." },
    LENGTH_PHOTO: { isSuccess: true, code: 310, message: "Photos can be uploaded less than 10 photos" },

    // 4xx : value validation error
    REDUNDANT_ID: { isSuccess: false, code: 401, message: "It is a redundant ID." },
    REDUNDANT_NICKNAME: { isSuccess: false, code: 402, message: "It is a redundant nickname." },

    OUT_OF_RANGE_ADDRESSIDX: { isSuccess: false, code: 403, message: "It is not in range of addressIdx." },
    OUT_OF_RANGE_ADDRESSTYPE: { isSuccess: false, code: 404, message: "Address type should be 'address' or 'subAddress'." },
    OUT_OF_RANGE_USER_STATUS: { isSuccess: false, code: 405, message: "It is not in list of user status." },
    OUT_OF_RANGE_SEARCH_RANGE: { isSuccess: false, code: 406, message: "Range should be 1 or 2 or 3." },
    OUT_OF_RANGE_CATEGORYIDX: { isSuccess: false, code: 407, message: "CategoryIdx is out of range." },
    OUT_OF_RANGE_PRICE: { isSuccess: false, code: 408, message: "Price can not be a negative number." },

    NOT_EXIST_ID: { isSuccess: false, code: 405, message: "This ID is not exist." },
    NOT_EXIST_PRODUCT: { isSuccess: false, code: 406, message: "This product is not exist." },

    USER_STATUS_INACTIVE: { isSuccess: false, code: 406, message: "This account is inactive." },
    USER_STATUS_WITHDRAWAL: { isSuccess: false, code: 407, message: "This account has been withdrawn." },

    PRODUCT_STATUS_NOT_ON_SALE: { isSuccess: false, code: 408, message: "This product is not on sale." },
    PRODUCT_STATUS_DELETED: { isSuccess: false, code: 409, message: "This product is deleted." },
    PRODUCT_STATUS_SOLD_OUT: { isSuccess: false, code: 410, message: "This product is sold out." },

    NOT_MATCHED_TOKEN_ID: { isSuccess: false, code: 408, message: "Tocken and user ID are not matched." },
    NOT_MATCHED_PASSWORD: { isSuccess: false, code: 409, message: "It's wrong password." },
    NOT_MATCHED_PRODUCT_WRITER_ID: { isSuccess: false, code: 409, message: "It is not writer's ID" },

    SAME_PASSWORD: { isSuccess: false, code: 410, message: "It's the same password." },
    SAME_STATUS: { isSuccess: false, code: 411, message: "It's the same status." },
    SAME_CATEGORYIDX: { isSuccess: false, code: 411, message: "It's the same categoryIdx." },

    // 5XX : server error such as Connection, Transaction ...
    DB_ERROR: { isSuccess: false, code: 500, message: "Database Error" },
    SERVER_ERROR: { isSuccess: false, code: 501, message: "Server Error" },
};
