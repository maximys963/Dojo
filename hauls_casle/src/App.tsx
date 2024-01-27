import CouponsArticle from "./CouponsArticle.tsx";

import {Select} from "@chakra-ui/react";

function App() {
    return (
        <>
            <div style={{
                width: 200,
                padding: "1rem"
            }}>
                <Select
                    placeholder="Select language"
                >
                    <option value='option1'>UKR (Ukrainian)</option>
                    <option value='option2'>EN (English)</option>
                    <option value='option3'>SWE (Swedish)</option>
                    <option value='option4'>EPO (Esperanto)</option>
                </Select>
            </div>
            <CouponsArticle/>
        </>
    )
}

export default App
