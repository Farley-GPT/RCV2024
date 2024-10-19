// sample data for candidates
const candidates = [
    { name: "John Doe", votes: 0 },
    { name: "Jane Smith", votes: 0 },
    { name: "Bob Johnson", votes: 0 },
  ];
  
  // get elements
  const candidatesList = document.getElementById("candidates-list");
  const votingForm = document.getElementById("voting-form");
  const submitVoteButton = document.getElementById("submit-vote");
  const resultsList = document.getElementById("results-list");
  
  // add candidates to list
  candidates.forEach((candidate) => {
    const li = document.createElement("li");
    li.textContent = candidate.name;
    candidatesList.appendChild(li);
  });
  
  // add event listener to submit vote button
  submitVoteButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstChoice = document.getElementById("first-choice").value;
    const secondChoice = document.getElementById("second-choice").value;
    const thirdChoice = document.getElementById("third-choice").value;
  
    // update votes
    candidates.forEach((candidate) => {
      if (candidate.name === firstChoice) {
        candidate.votes += 1;
      } else if (candidate.name === secondChoice) {
        candidate.votes += 0.5;
      } else if (candidate.name === thirdChoice) {
        candidate.votes += 0.25;
      }
    });
  
    // display results
    resultsList.innerHTML = "";
    candidates.forEach((candidate) => {
      const li = document.createElement("li");
      li.textContent = `${candidate.name}: ${candidate.votes} votes`;
      resultsList.appendChild(li);
    });
  });