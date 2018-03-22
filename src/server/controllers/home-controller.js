module.exports = function(app) {
    app.post('', function(req, res) {
        res.json({ message: 'ok' });
    });
}