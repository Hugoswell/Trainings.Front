import React from "react"
import FillInformationCta from "../Ctas/FillInformationCta"

const UserInformationWarning = () => {
    return (
        <div className="mt-24 light-orange-bg rounded-lg">
            <p className="container-85 py-4 gotham-book dark-grey">
                Vous n’avez pas encore renseigné les informations concernant votre profil. Nous ne pourrons pas vous générer d’entrainements sans vos préférences.
            </p>
            <FillInformationCta text="Renseigner mes informations" />
            <div className="h-4"></div>
        </div>
    );
}

export default UserInformationWarning;