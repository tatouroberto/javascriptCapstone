
// counter for number of comments for a single item
 const counter = (comment) => {
    let counter = comment.length;
    if (comment.error) {
      counter = 0;
    }
    return counter;
};

export default counter;