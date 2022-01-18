import departments from "./departments";

export default function todosDep(req, res){
    const all= departments.map(todos => todos.ToObject());
    
    res.status(200).json(all)
};