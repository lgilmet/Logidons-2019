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
    public class donArticleController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/donArticle
        public IQueryable<donArticle> GetdonArticles()
        {
            return db.donArticles;
        }

        // GET: api/donArticle/5
        [ResponseType(typeof(donArticle))]
        public IHttpActionResult GetdonArticle(int id)
        {
            donArticle donArticle = db.donArticles.Find(id);
            if (donArticle == null)
            {
                return NotFound();
            }

            return Ok(donArticle);
        }

        // PUT: api/donArticle/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutdonArticle(int id, donArticle donArticle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != donArticle.IDarticleDon)
            {
                return BadRequest();
            }

            db.Entry(donArticle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!donArticleExists(id))
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

        // POST: api/donArticle
        [ResponseType(typeof(donArticle))]
        public IHttpActionResult PostdonArticle(donArticle donArticle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.donArticles.Add(donArticle);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (donArticleExists(donArticle.IDarticleDon))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = donArticle.IDarticleDon }, donArticle);
        }

        // DELETE: api/donArticle/5
        [ResponseType(typeof(donArticle))]
        public IHttpActionResult DeletedonArticle(int id)
        {
            donArticle donArticle = db.donArticles.Find(id);
            if (donArticle == null)
            {
                return NotFound();
            }

            db.donArticles.Remove(donArticle);
            db.SaveChanges();

            return Ok(donArticle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool donArticleExists(int id)
        {
            return db.donArticles.Count(e => e.IDarticleDon == id) > 0;
        }
    }
}