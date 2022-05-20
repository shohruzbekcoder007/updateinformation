import React, { useMemo, memo } from 'react'
import codes from '../codes.json'

function CellRenderer({content_table_id, value}) {

    const component_text = useMemo(() => {

        if(!value) return '';
        
        let results = codes.Z1.find(element => element.content_table_id == content_table_id)
        if(!results){
            return value;
        }
        let answerResalt = results.answers.find(elem => elem.id == value)
        
        if(answerResalt !== undefined){
            return answerResalt.name_uz
        }

        return value
        
    }, [])

    return <span>{component_text}</span>;
}

export default memo(CellRenderer)