var express = require('express');
var router = express.Router();
var konek = require(__dirname + '/../bin/db.js');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});



/* GET users listing. */
router.get('/', function (req, res, next) {

  konek.query('SELECT * from tbl_mhs ', function (err, rows, fields) {
    if (!err)
      res.json({
        status: 'success',
        data: rows
      })
    else
      res.json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

/* GET users by id. */
router.get('/id/:id', function (req, res, next) {
  konek.query('SELECT * from tbl_mhs where id_mhs = ? ', req.params.id, function (err, rows, fields) {
    if (!err)
      res.status(200).json({
        status: 'success',
        data: rows[0]
      })
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while performing query.'
      }])
  });

});

router.post('/add', (req, res) => {
  data = req.body
  konek.query("INSERT INTO tbl_mhs set ? ", data, function (err, rows) {
    if (!err) 
      res.status(200).json([{
        status: 'success',
        insertID: rows.insertId
      }])   
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while inserting data.'
      }])
  })
})

router.put('/edit', (req, res) => {
  data = req.body
  id = data.id

  delete data.id
  // console.log(id)
  // res.sendStatus(200)
  konek.query("UPDATE tbl_mhs set ? where id_mhs = ? ", [data,id], function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while updating data.'
      }])
  })
})

router.delete('/delete', (req, res) => {
  // console.log(id)
  // res.sendStatus(200)
  konek.query("DELETE FROM tbl_mhs where id_mhs = ? ", req.body.id, function (err, rows) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while deleting data.'
      }])
  })
})


module.exports = router;
