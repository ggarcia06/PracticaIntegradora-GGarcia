import productsModel from "../models/products.js"

export default class ProductManager {

    constructor(){
        console.log("trabajando con productManager")
    }

    getAll = async (limit) => {

        let result = await productsModel.find().limit(limit)
        return result

    }
    getById = async (id) => {
        let result = await productsModel.findById(id)
        return result
    }
    addProduct = async (product) => {
        let result = await productsModel.create(product)
        return result
    }
    updateProduct = async(id, productData) => {
        let result = await productsModel.updateOne({_id:id}, { $set: productData})
        return result
    }
    deleteProduct = async (id) => {
        let result = await productsModel.deleteOne({_id:id})
        return result
    }

}