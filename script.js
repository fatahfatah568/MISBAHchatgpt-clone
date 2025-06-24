document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

// 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

function sendToChatGPT() {
  let value = document.getElementById("word-input").value;

  let body = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: value }],
    tempreture: "1",
  };

  let headers = {
    Authorization: "Bearer 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",
  };

  axios
    .post("https://api.openai.com/v1/chat/completions", body, {
      headers: headers,
    })
    .then((response) => {
      let reply = response.data.choices[0].message.content;
      document.getElementById("reply-content").textContent = reply;
    });
}
