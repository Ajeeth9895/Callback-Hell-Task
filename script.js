let container = document.createElement("div");
container.setAttribute("id", "container");
document.body.append(container);

let para = document.createElement("p");
para.setAttribute("id", "para");
container.append(para);

//Time out function Area
setTimeout(() => {
  document.querySelector("#para").textContent = "10";
  setTimeout(() => {
    document.querySelector("#para").textContent = "9";
    setTimeout(() => {
      document.querySelector("#para").textContent = "8";
      setTimeout(() => {
        document.querySelector("#para").textContent = "7";
        setTimeout(() => {
          document.querySelector("#para").textContent = "6";
          setTimeout(() => {
            document.querySelector("#para").textContent = "5";
            setTimeout(() => {
              document.querySelector("#para").textContent = "4";
              setTimeout(() => {
                document.querySelector("#para").textContent = "3";
                setTimeout(() => {
                  document.querySelector("#para").textContent = "2";
                  setTimeout(() => {
                    document.querySelector("#para").textContent = "1";
                    setTimeout(() => {
                        document.querySelector("#para").textContent = "Happy Independence Day";
                      }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);




