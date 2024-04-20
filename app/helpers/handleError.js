const httpError = (res, err) => {
    console.log(err);
    res.status(500);
    res.send({ error: "Ups, algo ocurrio :c" });
}

module.exports = { httpError }