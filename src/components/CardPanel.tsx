'use client';
import Card from "./Card";
import { useReducer } from "react";

export default function CardPanel() {
    // Reducer to manage the rating state in a Map
    const ratingReducer = (hospitalMap: Map<string, string>, action: { type: string, hospitalName: string, rating?: string }) => {
        const newMap = new Map(hospitalMap); // Copy existing Map
        
        // Handling the "ADD/UPDATE" and "REMOVE" actions
        switch (action.type) {
            case "ADD_OR_UPDATE":
                if (action.rating) {
                    newMap.set(action.hospitalName, action.rating); // Add or update the rating
                }
                break;
            case "REMOVE":
                newMap.delete(action.hospitalName); // Remove the hospital from the Map
                break;
            default:
                break;
        }
        return newMap; // Return the updated Map
    }

    // Initial state with an empty Map
    const [ratingMap, dispatchRating] = useReducer(ratingReducer, new Map<string, string>());

    return (
        <div style={{ margin: "20px" }}>
            {/* Top list of hospitals */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                    hospitalName="Chulalongkorn Hospital"
                    imgSrc="/img/chula.jpg"
                    onRatingChange={(hospital: string, rate: string) => dispatchRating({ type: "ADD_OR_UPDATE", hospitalName: hospital, rating: rate })}
                />
                <Card
                    hospitalName="Rajavithi Hospital"
                    imgSrc="/img/rajavithi.jpg"
                    onRatingChange={(hospital: string, rate: string) => dispatchRating({ type: "ADD_OR_UPDATE", hospitalName: hospital, rating: rate })}
                />
                <Card
                    hospitalName="Vajira Hospital"
                    imgSrc="/img/vajira.jpg"
                    onRatingChange={(hospital: string, rate: string) => dispatchRating({ type: "ADD_OR_UPDATE", hospitalName: hospital, rating: rate })}
                />
            </div>

            {/* Bottom list showing hospitals with ratings */}
            <div style={{ marginTop: "20px" }}>
                <h3>Hospital List with Ratings: {ratingMap.size}</h3>
                {Array.from(ratingMap).map(([hospitalName, rating]) => (
                    <div
                        key={hospitalName}
                        style={{ cursor: 'pointer' }}
                        onClick={() => dispatchRating({ type: "REMOVE", hospitalName })} // Remove hospital on click
                    >
                        {hospitalName}: {rating} stars
                    </div>
                ))}
            </div>
        </div>
    );
}
