 const qoute = document.getElementById("qoute");
      const btn = document.getElementById("qoute-btn");

      let qoutes = [
        "“Do what you can, with what you have, where you are.” – Theodore Roosevelt“",
        "“Don’t watch the clock; do what it does. Keep going.” – Sam Levenson“",
        "“It always seems impossible until it’s done.” – Nelson Mandela“",
        "“Great things are not done by impulse, but by a series of small things brought together.” – Vincent Van Gogh“",
        "“Hardships often prepare ordinary people for an extraordinary destiny.” – C.S. Lewis“",
        "“Success is not final, failure is not fatal: it is the courage to continue that counts.” – Winston Churchill“",
        "“Dream big and dare to fail.” – Norman Vaughan“",
        "“Everything you’ve ever wanted is on the other side of fear.” – George Addair“",
        "“Act as if what you do makes a difference. It does.” – William James",
        "“Start where you are. Use what you have. Do what you can.” – Arthur Ashe“",
      ];

      btn.addEventListener("click", () => {
        let randomQoute = Math.floor(Math.random() * qoutes.length);
        let rndIdx = qoutes[randomQoute];
        console.log(rndIdx);
        qoute.textContent = `${rndIdx}`;
      });