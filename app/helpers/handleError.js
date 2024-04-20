const httpError = (res, err) => {
    console.log("***Se PRODUJO UN ERROR***\n", err);
    res.status(500);
    res.send({ error: "Ups, algo ocurrio :c" });
}

module.exports = { httpError }