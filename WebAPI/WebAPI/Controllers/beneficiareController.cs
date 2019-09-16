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
    public class beneficiareController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/beneficiare
        public IQueryable<beneficiare> Getbeneficiares()
        {
            return db.beneficiares;
        }

        // GET: api/beneficiare/5
        [ResponseType(typeof(beneficiare))]
        public IHttpActionResult Getbeneficiare(int id)
        {
            beneficiare beneficiare = db.beneficiares.Find(id);
            if (beneficiare == null)
            {
                return NotFound();
            }

            return Ok(beneficiare);
        }

        // PUT: api/beneficiare/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putbeneficiare(int id, beneficiare beneficiare)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != beneficiare.IDbeneficiare)
            {
                return BadRequest();
            }

            db.Entry(beneficiare).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!beneficiareExists(id))
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

        // POST: api/beneficiare
        [ResponseType(typeof(beneficiare))]
        public IHttpActionResult Postbeneficiare(beneficiare beneficiare)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.beneficiares.Add(beneficiare);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = beneficiare.IDbeneficiare }, beneficiare);
        }

        // DELETE: api/beneficiare/5
        [ResponseType(typeof(beneficiare))]
        public IHttpActionResult Deletebeneficiare(int id)
        {
            beneficiare beneficiare = db.beneficiares.Find(id);
            if (beneficiare == null)
            {
                return NotFound();
            }

            db.beneficiares.Remove(beneficiare);
            db.SaveChanges();

            return Ok(beneficiare);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool beneficiareExists(int id)
        {
            return db.beneficiares.Count(e => e.IDbeneficiare == id) > 0;
        }
    }
}