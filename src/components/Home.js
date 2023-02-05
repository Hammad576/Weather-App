import React from 'react'

export default function Home() {
    let cities = [
        "London",
        "New York",
        "Bath",
        "Birmingham",
        "Bristol",
        "Los Angeles",
        "Chicago",
        "Houston",
      ];
  return (
    <div> 
 
     <ol class="list-group list-group-numbered">
  <li class="list-group-item"><a href="/c1">London</a></li>
  <li class="list-group-item"><a href="/c2">New York</a></li>
  <li class="list-group-item"><a href="/c3">Bath</a></li>
  <li class="list-group-item"><a href="/c4">Bringham</a></li>
  <li class="list-group-item"><a href="/c5">Bristal</a></li>
  <li class="list-group-item"><a href="/c6">Los Angles</a></li>
  <li class="list-group-item"><a href="/c7">Chicago</a></li>
  <li class="list-group-item"> <a href="/c8">Husten</a></li>
</ol>
 
    </div>
  )
}
