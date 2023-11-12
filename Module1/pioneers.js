const btnMinard = document.getElementById("btn-minard");
const btnNightingale = document.getElementById("btn-nightingale");
const contentDiv = document.getElementById("pioneer-content");

btnMinard.addEventListener("click", () => {
  contentDiv.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Charles Minard and His Graph</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
  <style>
    /* Custom CSS to make h3 tags smaller */
    h3 {
      font-size: 1.2rem;
    }
  </style>
</head>

<body>
  <div class="container mt-5">
    <div class="container">
      <h1 class="mt-4 mb-4">Charles Minard: The Pioneer of Data Visualization</h1>
      <h2>Who Was Charles Minard?</h2>

      <p>Charles Joseph Minard was born in France in 1781 and lived until 1870. Although he was originally trained as a
        civil engineer, Minard is most famous for his pioneering work in the field of data visualization. He's best
        known for his iconic flow map of Napoleon’s disastrous invasion of Russia, which is considered a masterpiece of
        statistical graphics.</p>
        <div class="row">
          <div class="col-sm-8">
          <img src="img/minard.png" alt="Charles Minard" class="img-fluid mb-3">
        </div>
        <div class="col">
        <p>Drawn by Charles Minard in 1869</p>

        <p>This illustrates losses of Napolean’s army in the Russian campaign in 1812.</p>
          
        <p>The advancement begins on the left-hand side of the chart in tan, and the retreat is shown in black.</p>
          
        <p>The width of the line represents the quantity of troops.</p>
          
        <p>Notice the difference in the width of the tan line when the campaign started on the left, and width of the black line which finishes at the left of the chart as the surviving troops returned home.</p>
        </div>
        </div>

      <h2>Why is Minard Important in Data Science?</h2>

      <ol>
        <li><strong>The Art of Storytelling</strong>
          <p>Minard's famous map of Napoleon's Russian campaign tells a story—a tragic one, but a story nonetheless. The
            map reveals how Napoleon's army shrank from 422,000 soldiers to just 10,000 during the campaign,
            representing multiple variables like geography, army size, and temperature on a two-dimensional plane.</p>
        </li>
        <li><strong>Multivariate Data Presentation</strong>
          <p>Minard’s map was one of the first instances of a multivariate data plot. He skillfully combined different
            types of data, such as geographic location, temperature, and the size of the army, into a single
            visualization.</p>
        </li>
        <li><strong>A Picture is Worth a Thousand Words</strong>
          <p>One of the most crucial aspects of data science is the ability to communicate complex data in an
            understandable manner. Minard showed us that visuals could efficiently convey a lot of information quickly
            and effectively.</p>
        </li>
      </ol>

      <h2>Let’s Dive Deeper!</h2>

      <h3>What is Data Visualization?</h3>
      <p>Data visualization is the graphic representation of data. It involves producing images that communicate
        relationships among the represented data to viewers. Visual elements like charts, graphs, and maps provide an
        accessible way to see and understand trends, outliers, and patterns in data.</p>

      <h3>Why is it Important?</h3>
      <ul>
        <li>Quick Interpretation: It’s much faster to analyze a graph than a table of numbers!</li>
        <li>Pattern Recognition: Seeing data visually can help identify trends or anomalies.</li>
        <li>Communication: It’s easier to explain your findings to others when you can show them something visual.</li>
      </ul>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>
  `;
});

btnNightingale.addEventListener("click", () => {
  contentDiv.innerHTML = `
  <!DOCTYPE html>

  <html lang="en">

  <head>
    <meta charset="utf-8" />
    <title>Florence Nightingale</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <div class="container mt-5">
      <h1>Florence Nightingale: The Pioneer of Data in Nursing</h1>
      <p>
        Florence Nightingale, often hailed as the founder of modern nursing,
        understood the importance of data. Contrary to the myth, Nightingale was
        not just the "lady with the lamp." She was a pioneering statistician.
      </p>
      <section id="data-science-contribution">
        <h2>Florence Nightingale's Contribution to Data Science</h2>
        <p>
          Florence Nightingale is often hailed as the founder of modern nursing,
          but her influence extends far beyond that realm. She was a pioneering
          statistician who understood the profound impact of data on healthcare
          outcomes. Contrary to the popular myth of her being just the "lady
          with the lamp," Nightingale was instrumental in changing hospital
          sanitation practices through her use of data.
        </p>
        <p>
          During the Crimean War, Nightingale meticulously collected data to
          analyze the primary causes of soldiers' deaths. Nightingale showed that 10 times as many patients were dying
          from preventable diseases caused by the lack of cleanliness in the hospitals. (BLUE)
          The deaths from actual injuries (RED). The larger circular graph on the right starts in April 1855. It is
          divided into 12 sections for each month, rotating clockwise. The black line connects March 1856 to the start
          of the second year (left circle).
        </p>
        <p>
          Surprisingly, she
          found that poor sanitation was a more significant factor than
          battlefield injuries. This insight led to transformative changes in
          hospital hygiene practices.
        </p>
        <h3>Data Visualization</h3>
        <p>
          Florence Nightingale was not just an adept statistician; she was also
          a pioneer in data visualization. She used a form of the pie chart
          known as the polar area diagram or Nightingale Rose Diagram to make
          her data more accessible. This innovative approach was critical in
          conveying complex data to non-experts and convincing key stakeholders
          of the need for sanitation reform.
        </p>
        <!-- Link Image fit image to width of page -->
        <div class="container">
          <img alt="Nightingale's Rose Diagram" class="img-fluid" src="img/Nightingale-mortality.jpg" />
        </div>
        <div class="row">
          <div class="col">
            <h3>Methodology</h3>
            <p>
              Nightingale approached her research with scientific rigor. She didn't
              just rely on anecdotal evidence or casual observations. Instead, she
              conducted comprehensive surveys, collected detailed hospital records,
              and employed statistical methods to analyze the data. Her methodology
              set a high standard for subsequent research in healthcare analytics.
            </p>
            <h3>Impact</h3>
            <p>
              The tangible impact of Nightingale's work cannot be overstated. Her
              advocacy for improved sanitation and hygiene protocols led to an
              estimated reduction in mortality rates by a significant margin.
              Thousands of lives were saved, not just during the Crimean War but
              also in subsequent years as her practices were adopted globally.
            </p>
          </div>
          <div class="col">
            <h3>Legacy</h3>
            <p>
              Nightingale left an enduring legacy that extends beyond nursing and
              healthcare. She set a precedent for the utilization of data in public
              policy and healthcare decisions. Her work laid the groundwork for
              modern epidemiology and has influenced generations of researchers,
              clinicians, and policy-makers.
              <center>
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="" frameborder="0" height="315"
                  src="https://www.youtube.com/embed/yhX0OR1_Vfc?si=r6Tr6j_ll2j-jDmK" title="YouTube video player"
                  width="560"></iframe>
              </center>
            </p>
          </div>
        </div>
        <h3>Relevance to Modern Data Science</h3>
        <p>
          Florence Nightingale's work aligns closely with the core principles of
          modern data science, including data collection, analysis, and
          visualization. She exemplified how data-driven decision-making could
          have a transformative impact on society. Nightingale's efforts serve
          as an inspiration for today's data scientists, reaffirming the
          transformative power of data in solving real-world problems.
        </p>
      </section>
      <h2>Quick Quiz</h2>
      <p>Who is Florence Nightingale?</p>
      <form id="quiz">
        <input id="nurse" name="answer" type="radio" value="nurse" />
        <label for="nurse">Founder of modern nursing</label><br />
        <input id="statistician" name="answer" type="radio" value="statistician" />
        <label for="statistician">Pioneering statistician</label><br />
        <input id="both" name="answer" type="radio" value="both" />
        <label for="both">Both</label><br />
        <input id="none" name="answer" type="radio" value="none" />
        <label for="none">None</label><br /><br />
        <input onclick="checkAnswer()" type="button" value="Submit" />
      </form>
      <p id="quiz-result"></p>
    </div>
  </body>
  <script>
    function checkAnswer() {
      var answer = document.querySelector('input[name="answer"]:checked').value;
      var result = document.getElementById("quiz-result");
      if (answer === "both") {
        result.innerHTML =
          "Correct! Florence Nightingale was both a founder of modern nursing and a pioneering statistician.";
        result.style.color = "green";
      } else {
        result.innerHTML =
          "Incorrect. Florence Nightingale was both a founder of modern nursing and a pioneering statistician.";
        result.style.color = "red";
      }
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="script.js"></script>

  </html>
  `;
});

document.addEventListener("DOMContentLoaded", function () {
  contentDiv.innerHTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Pioneers in Data Science</title>
        <!-- Link to Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container mt-5">
            <h1 class="mb-4">Pioneers in Data Science</h1>
            <p class="mb-4">
            The field of data science, though modern in its current form, has roots that trace back to several pioneers who laid the foundation with their innovative ideas and visualizations. Through data analytics, insightful patterns and trends can be unveiled, guiding awareness campaigns and behavior modification initiatives to foster desired changes. Let's explore a few notable figures who significantly impacted this domain.            </p>
            
            <h2 class="mb-3">Charles Minard</h2>
            <p class="mb-4">
                Charles Minard, a 19th-century French civil engineer, is renowned for his captivating visual representation of data. His most notable work is the visualization of Napoleon's 1812 Russian campaign, which masterfully depicted multiple data dimensions, including troop strength and temperature, on a two-dimensional plane.
            </p>
            
            <h2 class="mb-3">William Playfair</h2>
            <p class="mb-4">
                Often referred to as the father of statistical graphics, William Playfair introduced many pioneering ideas in the late 18th century. He is credited with inventing the line graph, bar chart, and pie chart, tools that remain fundamental in today's data visualization field.
            </p>
            
            <h2 class="mb-3">Florence Nightingale</h2>
            <p class="mb-4">
                A name synonymous with modern nursing, Florence Nightingale was also a gifted statistician. She used her skills to advocate for sanitary conditions in military hospitals, presenting data in a compelling way. Her "rose diagram" was instrumental in bringing about significant health reforms.
            </p>
        </div>
    
        <!-- Optional: Include Bootstrap JS for any interactive components -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`;
});
