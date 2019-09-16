using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class livraisonController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/livraison
        public IQueryable<livraison> Getlivraisons()
        {
            return db.livraisons;
        }

        // GET: api/livraison/5
        [ResponseType(typeof(livraison))]
        public IHttpActionResult Getlivraison(int id)
        {
            livraison livraison = db.livraisons.Find(id);
            if (livraison == null)
            {
                return NotFound();
            }

            return Ok(livraison);
        }

        // PUT: api/livraison/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putlivraison(int id, livraison livraison)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != livraison.IDlivraison)
            {
                return BadRequest();
            }

            db.Entry(livraison).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!livraisonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/livraison
        [ResponseType(typeof(livraison))]
        public IHttpActionResult Postlivraison(livraison livraison)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.livraisons.Add(livraison);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = livraison.IDlivraison }, livraison);
        }

        // DELETE: api/livraison/5
        [ResponseType(typeof(livraison))]
        public IHttpActionResult Deletelivraison(int id)
        {
            livraison livraison = db.livraisons.Find(id);
            if (livraison == null)
            {
                return NotFound();
            }

            db.livraisons.Remove(livraison);
            db.SaveChanges();

            return Ok(livraison);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool livraisonExists(int id)
        {
            return db.livraisons.Count(e => e.IDlivraison == id) > 0;
        }
    }
}