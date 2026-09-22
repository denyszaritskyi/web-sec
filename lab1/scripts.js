function escapeHTML(str) {
  if (!str) return "(джерело невідоме)";
  return str.replace(/[&<>"']/g, function (match) {
    const escapeMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return escapeMap[match];
  });
}

function isValidMathExpression(expr) {
  if (!expr) return false;
  const safePattern = /^[0-9+\-*/(). ]+$/;

  return safePattern.test(expr);
}
