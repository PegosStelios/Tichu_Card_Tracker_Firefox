chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    alert(
      "Μην ξεχάσετε να καρφιτσώσετε την επέκταση, πατώντας το κομμάτι του παζλ πάνω δεξιά 🧩 και ύστερα την πινέζα 📌."
    );
  }
});
