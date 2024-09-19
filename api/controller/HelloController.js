exports.HelloGet = (req, res) => {
    res.status(200).json({ status: "Success", data: 'Hello World get' });
};
exports.HelloPost = (req, res) => {
    res.status(201).json({ status: "Success", data: 'Hello World post' });
}
