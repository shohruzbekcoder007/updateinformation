import React, { useMemo, memo } from 'react'
import codes from '../codes.json'
import styled from 'styled-components'

const CellText = styled.span`
    width: 100%;
    display: inline-block;
    height: 38px;
    overflow: hidden;
`;

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

    return <CellText>{component_text}</CellText>;
}

export default memo(CellRenderer)