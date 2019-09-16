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
    public class donController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/don
        public IQueryable<don> Getdons()
        {
            return db.dons;
        }

        // GET: api/don/5
        [ResponseType(typeof(don))]
        public IHttpActionResult Getdon(int id)
        {
            don don = db.dons.Find(id);
            if (don == null)
            {
                return NotFound();
            }

            return Ok(don);
        }

        // PUT: api/don/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putdon(int id, don don)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != don.IDdon)
            {
                return BadRequest();
            }

            db.Entry(don).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!donExists(id))
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

        // POST: api/don
        [ResponseType(typeof(don))]
        public IHttpActionResult Postdon(don don)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.dons.Add(don);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = don.IDdon }, don);
        }

        // DELETE: api/don/5
        [ResponseType(typeof(don))]
        public IHttpActionResult Deletedon(int id)
        {
            don don = db.dons.Find(id);
            if (don == null)
            {
                return NotFound();
            }

            db.dons.Remove(don);
            db.SaveChanges();

            return Ok(don);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool donExists(int id)
        {
            return db.dons.Count(e => e.IDdon == id) > 0;
        }
    }
}