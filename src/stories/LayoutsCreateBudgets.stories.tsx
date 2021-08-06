import { faCalendar, faFilter, faList, faPlus, faSave, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from 'react';
import {
  Accordion
, Button
, ButtonGroup
, ButtonToolbar
, Dropdown
, DropdownItem
, FlexboxGrid
, FlexboxGridItem
, FormGroup
, Icon
, Input
, InputGroup
, InputGroupAddon
, InputGroupButton
, Panel
, Price
, SelectPicker
, Textarea
,
} from "../components";
import { Flex } from "../components/Flex";
import { Toolbar } from "../components/Toolbar/Toolbar";
import { ToolbarSection } from "../components/Toolbar/ToolbarSection";

export default {
  title: 'Layouts/Budgets/Form',
  component: Accordion,
  argTypes: {},
  args: {
    default: true,
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div>
      <FlexboxGrid justify={ "space-between" } align={ "middle" } spacingBottom>
        <div>Presupuestos { '>' } nuevo presupuesto</div>
        <ButtonToolbar>
          <Button appearance={ "white" } icon={ <Icon icon={ faFilter }/> }>Opciones</Button>
          <Button appearance={ "white" } icon={ <Icon icon={ faFilter }/> }>Previsualizar</Button>
          <Button appearance={ "white" } icon={ <Icon icon={ faFilter }/> }>Guardar como borrador</Button>
          <Dropdown placementMenu={ "left-bottom" } appearance={ "primary" } icon={ <Icon icon={ faSave }/> }
                    title={ "Aprobar" }>
            <DropdownItem>Guardar y crear nuevo</DropdownItem>
            <DropdownItem>Cancel</DropdownItem>
          </Dropdown>
        </ButtonToolbar>
      </FlexboxGrid>
      <Panel card>
        <FlexboxGrid gap={ 5 }>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Contacto" }>
              <SelectPicker data={ [] } placeholder={ "Seleccionar contacto" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Num documento" }>
              <InputGroup>
                <InputGroupAddon>
                  <Icon icon={ faList }/>
                </InputGroupAddon>
                <Input placeholder={ "Num" }/>
              </InputGroup>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem>
            <FormGroup label={ "Fecha" } noMargin>
              <InputGroup>
                <InputGroupAddon>
                  <Icon icon={ faCalendar }/>
                </InputGroupAddon>
                <Input placeholder={ "Fecha" } type={ "date" }/>
              </InputGroup>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem>
            <FormGroup label={ "Vencimiento" } noMargin>
              <InputGroup>
                <InputGroupAddon>
                  <Icon icon={ faCalendar }/>
                </InputGroupAddon>
                <Input placeholder={ "Elige" } type={ "date" }/>
              </InputGroup>
            </FormGroup>
          </FlexboxGridItem>
        </FlexboxGrid>
      </Panel>
      <Panel card spacingTop>
        <FlexboxGrid gap={ 5 }>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Concepto" }>
              <InputGroup>
                <InputGroupButton>
                  <Icon icon={ faSearch }/>
                </InputGroupButton>
                <Input placeholder={ "Escribe el concepto o usa @ para buscar" }/>
              </InputGroup>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Descripcion" }>
              <Textarea placeholder={ "Descripcion" } style={ { height: 30 } }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Cantidad" }>
              <Input placeholder={ "Cantidad" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Precio" }>
              <Input placeholder={ "Precio" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Impuestos" }>
              <Input placeholder={ "Impuestos" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Total" }>
              <Input placeholder={ "Total" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" } style={ { flex: 1 } }>
            <FormGroup label={ "Eliminar" }>
              <ButtonGroup style={ { marginLeft: "auto" } }>
                <Button style={ { width: "fit-content" } } appearance={ "primary" } icon={ <Icon icon={ faPlus }/> }/>
                <Button style={ { width: "fit-content" } } icon={ <Icon icon={ faTimes }/> }/>
              </ButtonGroup>
            </FormGroup>
          </FlexboxGridItem>
        </FlexboxGrid>
        <FlexboxGrid gap={ 5 }>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Concepto" }>
              <InputGroup>
                <InputGroupButton>
                  <Icon icon={ faSearch }/>
                </InputGroupButton>
                <Input placeholder={ "Escribe el concepto o usa @ para buscar" }/>
              </InputGroup>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem>
            <FormGroup noMargin label={ "Descripcion" }>
              <Textarea placeholder={ "Descripcion" } style={ { height: 30 } }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Cantidad" }>
              <Input placeholder={ "Cantidad" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Precio" }>
              <Input placeholder={ "Precio" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Impuestos" }>
              <Input placeholder={ "Impuestos" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" }>
            <FormGroup noMargin label={ "Total" }>
              <Input placeholder={ "Total" }/>
            </FormGroup>
          </FlexboxGridItem>
          <FlexboxGridItem colspan={ "auto" } style={ { flex: 1 } }>
            <FormGroup label={ "Eliminar" }>
              <ButtonGroup style={ { marginLeft: "auto" } }>
                <Button style={ { width: "fit-content" } } appearance={ "primary" } icon={ <Icon icon={ faPlus }/> }/>
                <Button style={ { width: "fit-content" } } icon={ <Icon icon={ faTimes }/> }/>
              </ButtonGroup>
            </FormGroup>
          </FlexboxGridItem>
        </FlexboxGrid>
        <Flex justify={ "end" }>
          <Button style={ { marginLeft: "auto" } } appearance={ "secondary" } icon={ <Icon icon={ faPlus }/> }>
            Añadir linea
          </Button>
        </Flex>
      </Panel>
      <FlexboxGrid gap={ 5 }>
        <FlexboxGridItem colspan={ 4 }>
          <Panel card spacingTop>
            <FormGroup label={ "Mensaje visible en Presupuesto" }>
              <Textarea
                placeholder={ "Mensaje visible en presupuesto" }
                style={ { height: 100 } }
              />
            </FormGroup>
          </Panel>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={ 4 }>
          <Panel card spacingTop>
            <FormGroup label={ "Informacion de pago" }>
              <SelectPicker
                placeholder={ "No seleccionada" }
                data={ [
                  {
                    label: "No seleccionada",
                    value: "-1",
                  },
                  {
                    label: "Transferencia bancaria",
                    value: "1",
                  },
                  {
                    label: "Pago al contado",
                    value: "2",
                  },
                ] }
              />
            </FormGroup>
          </Panel>
        </FlexboxGridItem>
        <FlexboxGridItem colspan={ 4 }>
          <Panel card spacingTop>
            <FormGroup label={ "Informacion de pago" }>
              <SelectPicker
                placeholder={ "No seleccionada" }
                data={ [
                  {
                    label: "No seleccionada",
                    value: "-1",
                  },
                  {
                    label: "Transferencia bancaria",
                    value: "1",
                  },
                  {
                    label: "Pago al contado",
                    value: "2",
                  },
                ] }
              />
            </FormGroup>
            <FormGroup label={ "Descripcion interna" }>
              <Textarea
                placeholder={ "Mensaje visible en presupuesto" }
              />
            </FormGroup>
            <FormGroup label={ "Proyectos" }>
              <SelectPicker
                placeholder={ "No asignado" }
                data={ [] }
              />
            </FormGroup>
          </Panel>
        </FlexboxGridItem>
      </FlexboxGrid>
      <Toolbar justify={ "end" } align={ "middle" } fixed={ "bottom" }>
        <ToolbarSection style={ { textAlign: "right", fontSize: 12 } }>
          <Price>0,00€</Price>
          <span>Subtotal</span>
        </ToolbarSection>
        <ToolbarSection style={ { textAlign: "right", fontSize: 12 } }>
          <Price>0,00€</Price>
          <span>IVA</span>
        </ToolbarSection>
        <ToolbarSection style={ { textAlign: "right", fontSize: 12 } }>
          <Price>0,00€</Price>
          <span>Total</span>
        </ToolbarSection>
      </Toolbar>
    </div>
  );
};

export const Default = Template.bind({});
export const Other = Template.bind({});

Other.args = {
  default: false,
};
