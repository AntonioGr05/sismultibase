import excuteQuery from '../../../DB/mysql'

export default async (req, res) => {
    try {
        console.log("req nom", req.body)
      const result = await excuteQuery({
          query: 'SELECT * FROM libro',
          values: [req.body.content],
      });
      console.log( "ttt",result );
  } catch ( error ) {
      console.log( error );
  }
  
  
  };