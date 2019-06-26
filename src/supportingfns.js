//Supporting functions
function fixSpelling (quote) {
  let fixedQuote = quote.replace("becuase", "because")
                                  .replace("wierd", "weird")
                                    .replace("gigggling", "giggling")
                                      .replace("sandwhiches", "sandwiches")
                                        .replace("specter", "spectre")
                                          .replace("Edinburg", "Edinburgh")
                                            .replace("stuffs", "stuff's")
                                              .replace("I.. ", "I... ")
                                                .replace("store bought", "store-bought");
  return fixedQuote;
};

export default fixSpelling;
