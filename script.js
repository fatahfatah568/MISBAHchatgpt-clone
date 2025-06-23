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
