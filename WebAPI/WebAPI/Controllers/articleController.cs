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
    public class articleController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

        // GET: api/article
        public IQueryable<article> Getarticles()
        {
            return db.articles;
        }

        

        // GET: api/article/5
        [ResponseType(typeof(article))]
        public IHttpActionResult Getarticle(int id)
        {
            article article = db.articles.Find(id);
            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        // PUT: api/article/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putarticle(int id, article article)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != article.IDarticle)
            {
                return BadRequest();
            }

            db.Entry(article).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!articleExists(id))
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

        // POST: api/article
        [ResponseType(typeof(article))]
        public IHttpActionResult Postarticle(article article)
        {
            db.articles.Add(article);

            db.SaveChanges();

            //return CreatedAtRoute("DefaultApi", new { id = article.IDarticle }, article);
            //article newArticle = db.articles.Last();
            return Ok(article);
        }

        // DELETE: api/article/5
        [ResponseType(typeof(article))]
        public IHttpActionResult Deletearticle(int id)
        {
            article article = db.articles.Find(id);
            if (article == null)
            {
                return NotFound();
            }

            db.articles.Remove(article);
            db.SaveChanges();

            return Ok(article);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool articleExists(int id)
        {
            return db.articles.Count(e => e.IDarticle == id) > 0;
        }
    }
}