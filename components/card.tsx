interface Props {
    title: string,
    description: string
}

export function Card({ title, description } : Props) {
    return (
        <div className="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
            </div>
        </div>
    )
}