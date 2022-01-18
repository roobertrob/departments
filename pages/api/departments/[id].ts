import departments from '../departments'


export default function handler(req, res){
    const idurl = +req.query.id;

    const oneDepartment = departments.filter(department=>department.id === idurl)
    if(oneDepartment.length===1){
        const departSelect = oneDepartment[0].ToObject()
        res.status(200).json(departSelect)
    } else {
        res.status(204).send()
    }
    
} 