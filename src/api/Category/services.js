import {Category} from "./Category.js"

const get_category_by_id = async (category_id) => {
    const category = await Category.findByPk(category_id);
    return category;
};

const get_category = async ( ) => {
    const categorys = await Category.findAll();
    return categorys;
};

const create_category = async (title,img_url) => {
    const  cat = await Category.create({title,img_url});
    return cat;

}

const update_category = async (data, category_id) => {
    const cat = await Category.update(data,{
        where: {id : category_id},
        returning: true,
        plain : true,
    });
    return cat;
}

const delete_category = async (category_id) => {
    const cat = await Category.destroy({where: {id : category_id}});
    return cat;
}

export {

    get_category_by_id,
    get_category,
    create_category,
    update_category,
    delete_category

} 