function ping() {
  return "ok";
}

function serviceName(name) {
  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("service name is required");
  }
  return name.trim();
}

module.exports = { ping, serviceName };
