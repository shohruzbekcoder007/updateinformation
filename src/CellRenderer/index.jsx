import React, { useMemo, memo } from 'react'
import codes from '../codes.json'
import styled from 'styled-components'

const CellText = styled.span`
    width: 100%;
    height: 100%;
    display: inline-block;
    height: 30px;
    overflow: hidden;
    display: flex;
    align-items: center;
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
            return answerResalt.label_uz
        }
        return value
        
    }, [])
    if(component_text.length > 20){
        return <CellText>{component_text.slice(0,20)}...</CellText>;
    }else{
        if(component_text.length === 0) return <CellText>---</CellText>
        return <CellText>{component_text}</CellText>;
    }
}

export default memo(CellRenderer)