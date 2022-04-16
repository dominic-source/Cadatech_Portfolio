import files from '../posts/inform.json'
import file from '../posts/questions.json'

//@function this function will return an array of items which will be used in 
//          various getStaticProps necessary for rendering.
export async function getPostData(){

    return files
}

export async function getPostFaq(){
    return file
}
// @function    this function will get all the id's necessary for dynamic routing of pages
//              it must return in this format:
//                                              [
//                                                  {
//                                                      params:{
//                                                          id:items
//                                                      }
//                                                  }
//                                              ]
export function getPostId(){

    return files.map((item)=>{
            return{
                params:{
                    id:item.title
                }
        }
    })   
}


//@function this function works like the getPostData above, 
//          the difference is that it will return specific data based on the id given as an argument
export async function getParamData(id){

        return files.filter(item => item.title==id)
}