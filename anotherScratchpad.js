function trash(id, name) {
    const result = {}
    result[id] = { id, name }
    return result
    console.log(result);
  }

  trash(1, 5);