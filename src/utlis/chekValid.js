const checkValid = (value) => {
    return value === null || value === 0 || value === undefined || value === "" || value === []
        ? "bilinmiyor"
        : value;
}
export default checkValid;

