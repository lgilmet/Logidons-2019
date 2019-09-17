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

//Controleur Utilisateur
namespace WebAPI.Controllers
{
    public class utilisateurController : ApiController
    {
        private LogiDonsEntities db = new LogiDonsEntities();

		public class LoginRequest
		{
			public string Username { get; set; }
			public string Password { get; set; }
		}

		// Post : api/utilisateur/login
		[Route("~/api/utilisateur/login")]
		[HttpPost]
		public IHttpActionResult verifyUser(LoginRequest request)
		{
			bool found = false;
			int id = 0;
			foreach(utilisateur u in db.utilisateurs)
			{
				if (u.username == request.Username && u.password == request.Password)
				{
					id = u.IDutilisateur;
					found = true;
				}
			}

			if (found)
				return Ok(id);
			else
				return Ok(-1);
			//return Ok(request.Username);
		}

        // GET: api/utilisateur
        public IQueryable<utilisateur> Getutilisateurs()
        {
            return db.utilisateurs;
        }

        // GET: api/utilisateur/5
        [ResponseType(typeof(utilisateur))]
        public IHttpActionResult Getutilisateur(int id)
        {
            utilisateur utilisateur = db.utilisateurs.Find(id);
            if (utilisateur == null)
            {
                return NotFound();
            }

            return Ok(utilisateur);
        }

        // PUT: api/utilisateur/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Pututilisateur(int id, utilisateur utilisateur)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != utilisateur.IDutilisateur)
            {
                return BadRequest();
            }

            db.Entry(utilisateur).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!utilisateurExists(id))
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

        // POST: api/utilisateur
        [ResponseType(typeof(utilisateur))]
        public IHttpActionResult Postutilisateur(utilisateur utilisateur)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.utilisateurs.Add(utilisateur);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = utilisateur.IDutilisateur }, utilisateur);
        }

        // DELETE: api/utilisateur/5
        [ResponseType(typeof(utilisateur))]
        public IHttpActionResult Deleteutilisateur(int id)
        {
            utilisateur utilisateur = db.utilisateurs.Find(id);
            if (utilisateur == null)
            {
                return NotFound();
            }

            db.utilisateurs.Remove(utilisateur);
            db.SaveChanges();

            return Ok(utilisateur);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool utilisateurExists(int id)
        {
            return db.utilisateurs.Count(e => e.IDutilisateur == id) > 0;
        }
    }
}