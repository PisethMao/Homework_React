import React from 'react'

export default function Feedback() {
  return (
    <div className="Reply">
       <h2>Feedback from Customer</h2>       
       <div class="row row-cols-1 row-cols-md-3">
          <div class="card">
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Jhon</h5>
              <p class="card-text">I Rellay like your book store because it have alot of book </p>
              <p class="card-text"><small class="text-muted">Last updated 3 day ago</small></p>
            </div>
          </div>
          <div class="card">
            <img src="https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.jpg?s=612x612&w=0&k=20&c=5Urz6DUqrMmg595KZVDXp86GvbRf5U8A55JG4ML4TG0=" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Dony</h5>
              <p class="card-text">Do you have book for reading? I am interesting with your book store </p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div class="card">
            <img src="https://www.shutterstock.com/image-photo/pretty-african-american-girl-reading-260nw-682208722.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Lika</h5>
              <p class="card-text">This book is so good. it make me feeling good to reading </p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <p>Thank you for your support my Store</p>
    </div>   
    
  )
}
