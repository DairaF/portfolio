exports.handler = (event, context, callback) => {
    return{
        statusCode:200,
        body: JSON.stringify({message:"hello"})
    }
    // event.queryStringParameters.id
    // //do something with it
  }