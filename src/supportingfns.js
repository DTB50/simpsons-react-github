//Supporting functions
function fixSpelling (quote) {
  let fixedQuote = quote.replace("becuase", "because")
                                  .replace("wierd", "weird")
                                    .replace("gigggling", "giggling")
                                      .replace("sandwhiches", "sandwiches")
                                        .replace("specter", "spectre")
                                          .replace("Edinburg", "Edinburgh");
  return fixedQuote;
};

export default fixSpelling;
