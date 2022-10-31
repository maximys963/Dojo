interface Pizza {
    ingredients: string[]
    name: string
    prepare: () => void
    bake: () => void
    cut: () => void
    box: () => void
}

export default Pizza
