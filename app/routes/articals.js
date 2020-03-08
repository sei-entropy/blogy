const express = require("express");

const router = express.Router();
const Artical = require("../models/article");
module.exports = router;

/**
 * Action : index
 * Method : GET
 * URT :    /api/artical
 * Description :Get all Articales
 */

router.get("/api/articals", (req, res) => {
  Artical.find()
    .then(Allarticals => {
      res.status(200).json({ articals: Allarticals });
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
/**
 * Action         SHOW
 * method         GET
 * URI           /api/articles/Id98765678
 *Description    get an Artical bt Artical ID
 */
router.get("/api/articals/:id", (req, res) => {
  Artical.findById(req.params.id)
    .then(articals => {
      console.log("NotFound");
      if (articals) {
        res.status(200).json({ artical: articals });
      } else {
        res.status(404).json({
          error: {
            name: "DocumentNotfundErrot ",
            message: "The provided ID dosen't match any document"
          }
        });
      }
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
/**
 * Action         CREARE
 * method         POST
 * URI           /api/articles/
 *Description    create new articale
 */
router.post("/api/articals", (req, res) => {
  res.json({ message: "cool", Q: 42, data: req.body.artical });
  Artical.create(req.body.artical)
    .then(newArtical => {
      res.status(201).json({ artical: newArtical });
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
/**
 * Action         UPDATE
 * method         PATCH
 * URI           /api/articles/Id66555779
 *Description    Udate an artical by artical Id
 */
router.patch("/api/articals/:id", (req, res) => {
  Artical.findById(req.params.id)
    .then(artical => {
      console.log("NotFound");
      if (artical) {
        res.send("Ok");
        return artical.update(req.body.artical);
      } else {
        res.status(404).json({
          error: {
            name: "DocumentNotfundErrot ",
            message: "The provided ID dosen't match any document"
          }
        });
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});
/**
 * Action         DESTROY
 * method         DELETE
 * URI           /api/articles/Id66555779
 *Description    Delete an artical by artical Id
 */

router.delete("/api/articals/:id", (req, res) => {
  Artical.findById(req.params.id)
    .then(artical => {
      console.log("NotFound");
      if (artical) {
        return artical.remove();
      } else {
        res.status(404).json({
          error: {
            name: "DocumentNotfundErrot ",
            message: "The provided ID dosen't match any document"
          }
        });
      }
    })
    .then(() => {
      res.status(204).end();
    })
    .catch(error => {
      res.status(500).json({ error: error });
    });
});

// function find(cbSuccess, cbError)
//   if true
//     cbSuccess()
//   else
//     cbError
// find( ()=>{ok}, ()=>{fail} )
// find.then( ()=>{ok} ).catch( ()=>{fail} )
// function ok
//   return ok
// function fail
//   return fail
// find.then(ok).catch(fail)
// */
