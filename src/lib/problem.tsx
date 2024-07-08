import { Button } from "react-bootstrap";

export function difficulty_text(difficulty: number): string {
    switch (difficulty) {
        case 0:
            return "Easy";
        case 1:
            return "Medium";
        case 2:
            return "Hard";
    }
    return "";
}

export function DifficultyElement(props: { difficulty: number }) {
    return (
        <button className="btn btn-warning" type="button" style={{ height: "1.5rem", padding: 0, fontSize: "0.8rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", marginRight: "0.3rem", borderStyle: "none", borderTopStyle: "none" }}>
            {difficulty_text(props.difficulty)}
        </button>
    )
}

export function TagElement(tag: string) {
    return (
        <Button className="btn btn-primary" type="button" href={`/tag/${tag}`} key={tag} style={{ height: "1.5rem", padding: 0, fontSize: "0.8rem", paddingLeft: "0.5rem", paddingRight: "0.5rem", marginRight: "0.3rem", background: "rgb(190,190,190)", borderStyle: "none", borderTopStyle: "none" }}>
            #{tag}
        </Button>
    )
}