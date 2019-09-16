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
    public class livraisonDonArticleController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/livraisonDonArticle
        public IQueryable<livraisonDonArticle> GetlivraisonDonArticles()
        {
            return db.livraisonDonArticles;
        }

        // GET: api/livraisonDonArticle/5
        [ResponseType(typeof(livraisonDonArticle))]
        public IHttpActionResult GetlivraisonDonArticle(int id)
        {
            livraisonDonArticle livraisonDonArticle = db.livraisonDonArticles.Find(id);
            if (livraisonDonArticle == null)
            {
                return NotFound();
            }

            return Ok(livraisonDonArticle);
        }

        // PUT: api/livraisonDonArticle/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutlivraisonDonArticle(int id, livraisonDonArticle livraisonDonArticle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != livraisonDonArticle.IDlivraison)
            {
                return BadRequest();
            }

            db.Entry(livraisonDonArticle).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!livraisonDonArticleExists(id))
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

        // POST: api/livraisonDonArticle
        [ResponseType(typeof(livraisonDonArticle))]
        public IHttpActionResult PostlivraisonDonArticle(livraisonDonArticle livraisonDonArticle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.livraisonDonArticles.Add(livraisonDonArticle);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = livraisonDonArticle.IDlivraison }, livraisonDonArticle);
        }

        // DELETE: api/livraisonDonArticle/5
        [ResponseType(typeof(livraisonDonArticle))]
        public IHttpActionResult DeletelivraisonDonArticle(int id)
        {
            livraisonDonArticle livraisonDonArticle = db.livraisonDonArticles.Find(id);
            if (livraisonDonArticle == null)
            {
                return NotFound();
            }

            db.livraisonDonArticles.Remove(livraisonDonArticle);
            db.SaveChanges();

            return Ok(livraisonDonArticle);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool livraisonDonArticleExists(int id)
        {
            return db.livraisonDonArticles.Count(e => e.IDlivraison == id) > 0;
        }
    }
}